import jss, { create } from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const jssInstnace = create()

const { classes } = jssInstnace
  .createStyleSheet({
    theme: {
      backgroundColor: 'red',
    },
  })
  .attach()
export default () => {}
