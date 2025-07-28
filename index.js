'use strict';

console.log('🚀 @chepworth/ember-validated-form in-repo addon loading...');

module.exports = {
  name: require('./package').name,
  
  isDevelopingAddon() {
    return true;
  },
  
  included() {
    this._super.included.apply(this, arguments);
    console.log('🎯 @chepworth/ember-validated-form addon included successfully!');
    
    // Simple configuration without @embroider/macros complications
    const app = this._findHost(this);
    console.log('📋 @chepworth/ember-validated-form configuration:', app.options['@chepworth/ember-validated-form'] || 'none');
  }
};
