import { Creator, useCreateStyles } from '#/utils/common-styles'
import { Text, View } from '@react-pdf/renderer'
import React, { FC } from 'react'

const creator: Creator = (s) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 12,
    marginBottom: 12
  },
  title: {
    fontFamily: s.fancy,
    fontWeight: s.heavy,
    fontSize: 14,
    lineHeight: s.lang === 'zh' ? 1 : undefined,
    backgroundColor: 'white',
    paddingRight: 10
  },
  strokeLine: {
    flexGrow: 1,
    borderTop: 0.5,
    borderColor: '#aaa',
    position: 'absolute',
    width: '100%',
    top: '50%'
  }
})

export const SectionTitle: FC = ({ children }) => {
  const s = useCreateStyles(creator)

  return (
    <View style={s.container}>
      <View style={s.strokeLine} />
      <Text style={s.title}>{children}</Text>
    </View>
  )
}
