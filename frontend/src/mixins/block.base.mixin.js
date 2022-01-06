// Components
import cFormField from "../components/fields/FormField.vue";

// Constants
import { constantService } from '../services/constantService';

export default {
  components: { cFormField },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    meta: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    // cache to register index via fields array
    metaIndexCacheMap: {},
    fieldIndexCacheMap: {},

    // value to hold fields (which could be change conditionally)
    fields: null,
  }),
  created() {
    // only render fields that are intended for initial render
    this.fields = this.meta.filter((field) => field.is_render_initial);

    // creating a cache to local with field resides on which index
    this.evalMetaIndexCache();
    this.evalFieldsIndexCache();
  },

  methods: {
    // Events
    input(event, key) {
      this.$emit("input", { ...this.value, [key]: event });

      this.renderNextNodesOnChange(event, key);
    },

    // helper functions
    evalMetaIndexCache() {
      this.metaIndexCacheMap = {};
      this.meta.forEach(
        (field, index) => (this.metaIndexCacheMap[field.key] = index)
      );
    },
    evalFieldsIndexCache() {
      this.fieldIndexCacheMap = {};
      this.fields.forEach(
        (field, index) => (this.fieldIndexCacheMap[field.key] = index)
      );
    },
    getMetaField(metaFieldKey) {
      const metaFieldIndex = this.metaIndexCacheMap[metaFieldKey];
      const metaField = this.meta[metaFieldIndex];

      if (!metaField) {
        throw new Error("Can not find meta field by given index");
      }
      return metaField;
    },
    getField(fieldKey) {
      const fieldIndex = this.fieldIndexCacheMap[fieldKey];
      const field = this.fields[fieldIndex];

      if (!field) {
        throw new Error("Can not find field by given index");
      }
      return field;
    },
    getColumnNumber(field) {
      const {
        misc: { column_size },
      } = field;
      return column_size || constantService.defaultColumnWidth;
    },
    removeField(fieldKey) {
      const fieldIndexToBeRemoved = this.fieldIndexCacheMap[fieldKey];
      if (fieldIndexToBeRemoved === undefined) {
        // that means if this field is not inside fields then no need to remove it wither
        return;
      }

      // remove it from the fields array as well
      this.fields.splice(fieldIndexToBeRemoved, 1);

      // re-calc fields index cache after fields is updated
      this.evalFieldsIndexCache(); // we need to full re-calc it because field can be removed from any index (i.e. line below is commented out)
      // delete this.fieldIndexCacheMap[fieldKey];
    },
    renderNextNodesOnChange(fieldValue, fieldKey) {
      const {
        is_check_next_nodes: isCheckNextNodes = false,
        next_nodes: nextNodes = [],
      } = this.getField(fieldKey);

      // nothing to do if there are no nodes to render next
      if (!isCheckNextNodes) {
        return;
      }

      const self = this; // use this approach OR omit arrow function below
      nextNodes.forEach((nextNodeKey) => {
        const nextNodeMetaField = self.getMetaField(nextNodeKey);
        const { node_scope: nodeScope = [] } = nextNodeMetaField;

        // is current value is inside node scope only then render the field
        if (nodeScope?.includes(fieldValue)) {
          const nextNodeFieldIndex = self.fieldIndexCacheMap[nextNodeKey];
          if (nextNodeFieldIndex !== undefined) {
            /**
             * that means this field is already defined so,
             * just skip, if we are okay with fields getting reordered
             * if not, then remove the field so, it can re-initiate and settle on it's proper position
             */
            self.removeField(nextNodeKey);
            // return;
          }

          const length = self.fields.push(nextNodeMetaField);
          const pushedIndex = length - 1;

          // re-calc fields index cache after fields is updated
          self.fieldIndexCacheMap[nextNodeKey] = pushedIndex;
          // self.evalFieldsIndexCache(); // no need to re-calc for whole array as pushed index is known
        } else {
          // if value is not inside node_scope and it's inside fields then we should remove it from the fields
          self.removeField(nextNodeKey);
        }
      });
    },
  },
};
