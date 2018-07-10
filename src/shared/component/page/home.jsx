// @flow
import injectSheet from 'react-jss'
import React from 'react'
import Helmet from 'react-helmet'

import ModalExample from '../modal-example'
import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
}

const HomePage = ({ classes }: { classes: Object }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 mb-4">
          {APP_NAME}
        </h1>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">
            JSS
          </h3>
          <p className={classes.hoverMe}>
            Hover me.
          </p>
          <p className={classes.resizeMe}>
            Resize the window.
          </p>
          <button type="button" className={classes.specialButton}>
            Composition
          </button>
        </div>
      </div>
    </div>
    <ModalExample />
  </div>
)

export default injectSheet(styles)(HomePage)
