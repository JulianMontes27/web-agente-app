"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";
import qs from "query-string";

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

const formSchema = z.object({
  tableNumber: z.string().min(0),
});

const CreateTableModal = () => {
  const { isOpen, onClose, modalType } = useModalStore();
  const router = useRouter();
  const params = useParams();

  if (!params) {
    router.push("/");
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tableNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      //create a url to query, with a search param (restaurantId)
      const url = qs.stringifyUrl({
        url: "/api/tables",
        query: {
          restaurantId: params?.restaurantId,
        },
      });
      await axios.post(url, values).then((res) => {
        router.refresh();
        //res.data
        if (res.data)
          router.push(
            `/dashboard/restaurants/${params?.restaurantId}/${res.data.id}`
          );
      });
      toast.success("Mesa creada.");

      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error creando tu Mesa.");
    }
  }

  return (
    <Dialog
      open={isOpen && modalType === "create-agent"}
      onOpenChange={onClose}
    >
      <DialogContent className="bg-white text-black sm:max-w-[425px] overflow-hidden rounded-md">
        <DialogHeader className="py-3 px-3">
          <DialogTitle className="font-semibold text-2xl">
            Crea una Mesa
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="tableNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero de mesa</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white focus:ring-0 text-black "
                        placeholder="1"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Este es el numero de la mesa en tu restaurante.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-2 text-white rounded bg-blue-900"
                disabled={form.formState.isSubmitting}
              >
                Añadir
              </button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTableModal;
