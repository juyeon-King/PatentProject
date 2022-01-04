import { css } from '@emotion/react'
import AuthFormBody from '../../components/AuthFormBody'
import RegisterForm from '../../components/AuthFormBody/RegisterForm'
import palette from '../../lib/palette'

type RegisterProps = {}

export default function Register({}: RegisterProps) {
  return (
    <div css={wrapper}>
      <AuthFormBody width={606} height={820}>
        <RegisterForm />
      </AuthFormBody>
    </div>
  )
}

const wrapper = css`
  background-color: ${palette.blueGrey[50]};
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;
`
