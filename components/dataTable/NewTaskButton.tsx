"use client"

import { Dialog, DialogContent, DialogTrigger, DialogClose } from "../ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  taskName: z.string(),
  priority: z.number()
})

export default function NewTaskButton() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: "",
      priority: 0
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger className="pr-4 pt-2">
        <PlusIcon />
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-8">
            <FormField 
              control={form.control}
              name="taskName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Task</FormLabel>
                  <FormControl>
                    <Input placeholder="Task Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe your task!
                  </FormDescription>
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit">Create Task</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}