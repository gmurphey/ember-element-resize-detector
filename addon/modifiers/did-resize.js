import Ember from 'ember';

export default Ember._setModifierManager(
  owner => ({
    createModifier() {
      return {
        element: null,
        callback: undefined
      };
    },

    installModifier(state, element, { positional: [ callback ] }) {
      let cb = undefined;

      if (typeof callback === 'function') {
        cb =  function() {
          callback(element);
        };

        owner.lookup('service:resize-detector').setup(element, cb);
      }

      state.element = element;
      state.callback = cb;
    },

    updateModifier(state, { positional: [callback]}) {
      let cb = undefined;

      if (typeof state.callback === 'function') {
        owner.lookup('service:resize-detector').teardown(state.element, state.callback);
      }

      if (typeof callback === 'function') {
        cb =  function() {
          callback(state.element);
        };

        owner.lookup('service:resize-detector').setup(state.element, cb);
      }

      state.callback = cb;
    },

    destroyModifier({ element, callback }) {
      if (typeof callback === 'function') {
        owner.lookup('service:resize-detector').teardown(element, callback);
      }
    }
  }),
  class DidResizeModifier {}
);
