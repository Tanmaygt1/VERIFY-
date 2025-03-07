import * as React from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

export function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={`w-[300px] justify-start text-left font-normal ${
            !date ? 'text-muted-foreground' : ''
          }`}
        >
          {date?.from ? (
            date.to ? (
              `${format(date.from, 'LLL dd, y')} - ${format(date.to, 'LLL dd, y')}`
            ) : (
              format(date.from, 'LLL dd, y')
            )
          ) : (
            'Pick a date'
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <DayPicker
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
