import { AuthLayout } from './auth/layout/AuthLayout'
import { Login } from './auth/Feature/login/page/login'
import { Ubicacion } from './auth/Feature/ubication/page/ubication'
import { usarClickLogo } from './auth/Feature/login/hooks/usarClickLogo'

export const CapturaApp = () => {
  const { irAUbicacion, manejarClickLogo } = usarClickLogo()

  return (
    <AuthLayout alClickLogo={manejarClickLogo}>
      {irAUbicacion ? <Ubicacion /> : <Login />}
    </AuthLayout>
  )
}

