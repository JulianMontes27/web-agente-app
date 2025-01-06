"use client";

import axios from "axios";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import useSWR from "swr";
import useModalStore from "@/hooks/use-modal-store";
import { useParams, useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(0),
  short_dsc: z.string().min(0),
});

const CreateAgentModal = () => {
  const { isOpen, onClose, modalType, data } = useModalStore();
  const router = useRouter();
  const params = useParams();
  if (!params) {
    return router.push("/");
  }
  if (!data) throw new Error("No data object.");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      short_dsc: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios
        .post("/api/agents", values)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      toast.error("There was an error creating your Agent. Try again later");
    }
  }

  return (
    <Dialog
      open={isOpen && modalType === "create-agent"}
      onOpenChange={onClose}
    >
      <DialogContent className="bg-white text-black sm:max-w-[425px] overflow-hidden rounded-md">
        <DialogHeader>
          <DialogTitle className="font-semibold text-4xl">
            Create an AI Agent
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col gap-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white focus:ring-0 text-black text-sm "
                        placeholder="Business analyzer bot"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Unique name for your AI Agent.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="short_dsc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white focus:ring-0 text-black text-sm "
                        placeholder="Analyses large amount of excel files into robust and well made reports."
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      A short description about your AI Agent.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full transform flex items-center
                transition-transform duration-300 ease-in-out hover:scale-105  text-white rounded "
                disabled={form.formState.isSubmitting}
              >
                Create
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAgentModal;
