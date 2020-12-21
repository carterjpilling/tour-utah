import React from 'react'
import { Card, makeStyles } from '@material-ui/core'

export default function Cards() {
  const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 5,
      width: '500',
      height: '500',

    }
  }))

  const classes = useStyles()





  return (
    <div>
      <Card className={classes.card}>
        <h1>Hi</h1>
      </Card>
    </div>
  )
}