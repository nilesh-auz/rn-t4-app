import { Button, XStack, YStack, Demo } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { violetDark } from '@tamagui/colors'

const { useParam } = createParam<{ id: string }>()

export const DemoScreen = (): React.ReactNode => {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space>
      <XStack space="$2" justifyContent="center">
        <Demo.ButtonDemo />
        <Demo.ButtonDemo color={violetDark} />
      </XStack>

      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
