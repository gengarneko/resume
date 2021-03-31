import { Creator, useCreateStyles } from '#/utils/common-styles'
import { Text } from '@react-pdf/renderer'
import React, { FC } from 'react'

const creator: Creator = (s) => ({
  inline: {
    lineHeight: 1.3
  },
  deco: {
    fontWeight: s.bold
  },
  item: {
    fontSize: s.size
  }
})

export const ListItem: FC = ({ children }) => {
  const s = useCreateStyles(creator)

  return (
    <Text style={s.inline}>
      <Text style={s.deco}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
      <Text style={s.item}>{children}</Text>
    </Text>
  )
}
