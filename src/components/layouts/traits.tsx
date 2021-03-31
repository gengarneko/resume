import { Creator, useCreateStyles } from '#/utils/common-styles'
import { Text, View } from '@react-pdf/renderer'
import React, { FC } from 'react'
import { ContentContainer } from '../utils/content-container'
import { SectionTitle } from '../utils/section-title'

const creator: Creator = (s) => ({
  inline: {
    fontSize: s.size
  },
  label: {
    fontWeight: s.bold
  }
})

export const Traits: FC<{
  title: string
  traits: { label: string; list: string }[]
}> = ({ title, traits }) => {
  const s = useCreateStyles(creator)

  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      <ContentContainer>
        {traits.map((e, i) => (
          <Text style={s.inline} key={i}>
            <Text style={s.label}>{e.label}:&nbsp;&nbsp;</Text>
            <Text>{e.list}</Text>
          </Text>
        ))}
      </ContentContainer>
    </View>
  )
}
