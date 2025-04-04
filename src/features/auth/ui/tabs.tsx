import * as TabsPrimitive from '@radix-ui/react-tabs'
import { twMerge } from 'tailwind-merge'

export const Tabs = TabsPrimitive.Root

export const TabsList = ({
  className,
  ...props
}: TabsPrimitive.TabsListProps) => (
  <TabsPrimitive.List
    className={twMerge('flex gap-4 border-b pb-2', className)}
    {...props}
  />
)

export const TabsTrigger = ({
  className,
  ...props
}: TabsPrimitive.TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    className={twMerge(
      'px-4 py-2 text-sm font-medium focus:outline-none data-[state=active]:bg-[#d9d9d9]',
      'flex h-12 w-45 min-w-27.5 cursor-pointer items-center justify-center',
      className,
    )}
    {...props}
  />
)

export const TabsContent = ({
  className,
  ...props
}: TabsPrimitive.TabsContentProps) => (
  <TabsPrimitive.Content className={twMerge('mt-4', className)} {...props} />
)
