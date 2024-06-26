"use client"

import { Dialog, DialogContent, DialogTrigger, DialogClose } from "../ui/dialog";
import { PlusIcon, ReloadIcon } from "@radix-ui/react-icons";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  taskName: z
    .string()
    .min(1, {
      message: "Task name can't be empty" 
    }
  ),
  priority: z
    .coerce
    .number()
    .nonnegative() // TODO: will probably change this to superRefine to prevent "expected x, received nan" error
})

export default function NewTaskButton() {

  const router = useRouter();
  const [dialog, setDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: "",
      priority: 0
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await fetch("/dashboard/api/tasks", {
      method: "POST",
      body: JSON.stringify(values)
    }).then(async (res) => {
      // On successful request, close dialog and refresh route to fetch latest data on datatable
      router.refresh();
      setDialog(false);
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <Form {...form}>
      <Dialog open={dialog} onOpenChange={setDialog}>
      <PlusIcon
        className="mr-4 mt-2" 
        onClick={() => setDialog(true)}
      />
      <DialogContent>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Task Priority" 
                      {...field}  
                    />
                  </FormControl>
                  <FormDescription>
                    How important is this task?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit"
              disabled={loading}
            >
              { loading ? <><ReloadIcon className="animate-spin mx-2" />Loading...</> : 'Create Task' }
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  )
}