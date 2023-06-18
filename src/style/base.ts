import jss, { create } from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const _jss = create()

const { classes } = _jss
  .createStyleSheet({
    theme: {
      backgroundColor: 'red',
    },
  })
  .attach()
export default () => {}
