import _isArray from 'lodash-es/isArray'
import _mergeWith from 'lodash-es/mergeWith'
import _cloneDeep from 'lodash-es/cloneDeep'

export default {
  data () {
    return {
      test: {
        class: 'test'
      },

      test_one: {
        class: 'test--one'
      },

      test_two: {
        class: 'test--two'
      },

      test_three: {
        class: 'test--three',
        'md-12': true
      },

      test_four: {
        class: 'test--four'
      }
    }
  },

  computed: {
    mixinBindings () {
      return {
        class: [this.test.class, this.test_one.class],
        'sm-8': true
      }
    }
  },

  methods: {
    extendMixinBindings (bindings = []) {
      // https://lodash.com/docs/4.17.10#mergeWith
      return _mergeWith(
        // Original mixin bindings should be cloned, as 'mergeWith' mutates srcObject
        _cloneDeep(this.mixinBindings),
        // Additional bindings
        ...bindings,
        // Custom handling to concat array values or merged properties
        (objValue, srcValue) => {
          if (_isArray(objValue)) {
            return objValue.concat(srcValue)
          }
        }
      )
    }
  }
}
