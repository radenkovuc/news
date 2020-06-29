import styled from 'styled-components'
import React from 'react'
import withTranslation from '../HOCs/withTranslation'

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
  message: String,
  t: Function
}

const ContainerWithMessage = (props: Props) => {
  const {t, message} = props
  return (
    <Container>
      <Text>{t(message)}</Text>
    </Container>
  )
}

ContainerWithMessage.defaultProps = {
  message: '',
  t: (t) => t
}

export default withTranslation(ContainerWithMessage)
