"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function About() {
  return (
    <Card className="w-[350px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Blogs</CardTitle>
      </CardHeader>
      <CardContent>
        <h1>Blog List</h1>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a className="btn btn-link" href="/phase_2/blog/new">Add</a>
      </CardFooter>
    </Card>
  )
}
