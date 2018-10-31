import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

import Vuetify, {
  VApp,
  VNavigationDrawer,
  VBtn,
  VGrid,
  VIcon,
  VList,
  VToolbar,
  VTooltip,
  transitions
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VBtn,
    VGrid,
    VIcon,
    VList,
    VToolbar,
    VTooltip,
    transitions
  },
  theme: {
    primary: colors.deepOrange.base,
    accent: colors.blue.accent3,
    error: colors.red.darken1,
    success: colors.green.base,
    warning: colors.amber.base
  }
})
