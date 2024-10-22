"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AddNewBlog({ openBlogDialog, setOpenBlogDialog, loading, setLoading, blogFormData, setBlogFormData, handleSaveBlogData, currentEditedBlogID, setCurrentEditedBlogID }) {
  return (
    <div>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <div>
        <Dialog open={openBlogDialog} onOpenChange={() => {
          setCurrentEditedBlogID(null);
          setOpenBlogDialog(false);
          setBlogFormData({
            title:"",
            description:""
          });
        }}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{currentEditedBlogID ? "Edit Blog" : "Add New Blog"}</DialogTitle>
              <DialogDescription>{currentEditedBlogID ? 'Edit your blog' : 'Add new blog'}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  name="title"
                  placeholder="Enter Blog title"
                  value={blogFormData.title}
                  onChange={(event) => setBlogFormData({ ...blogFormData, title: event.target.value })}
                  id="title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  name="description"
                  placeholder="Enter Blog description"
                  value={blogFormData.description}
                  onChange={(event) => setBlogFormData({ ...blogFormData, description: event.target.value })}
                  id="description"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSaveBlogData} disabled={loading}>
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default AddNewBlog;
