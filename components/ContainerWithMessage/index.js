import styled from 'styled-components'
import React from 'react'
import {useTranslation} from 'next-i18next'

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Text = styled.div`
  text-align: center;
  font-size: 22px;
  font-family: 'Nunito Sans black', sans-serif;
`

type Props = {
  message: String
}

const ContainerWithMessage = ({message}: Props) => {
  const {t} = useTranslation()

  return (
    <Container>
      <Text>{t(message)}</Text>
    </Container>
  )
}

ContainerWithMessage.defaultProps = {
  message: ''
}

export default ContainerWithMessage
