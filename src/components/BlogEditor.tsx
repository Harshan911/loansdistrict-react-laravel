import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  excerpt: string;
  seo: {
    metaDescription: string;
    customUrl: string;
  };
}

export const BlogEditor = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (!auth) {
      navigate("/");
      toast({
        title: "Access Denied",
        description: "Please login to access the editor",
        variant: "destructive",
      });
      return;
    }

    if (id) {
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const post = savedPosts.find((p: BlogPost) => p.id === Number(id));
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setImage(post.image);
        setMetaDescription(post.seo?.metaDescription || '');
        setCustomUrl(post.seo?.customUrl || '');
      }
    }
  }, [id, navigate, toast]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const blogPost = {
      id: id ? Number(id) : Date.now(),
      title,
      date: new Date().toLocaleDateString(),
      image: image || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      content,
      excerpt: content.slice(0, 150) + '...',
      seo: {
        metaDescription,
        customUrl: customUrl || title.toLowerCase().replace(/\s+/g, '-'),
      }
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    let updatedPosts;

    if (id) {
      updatedPosts = existingPosts.map((post: BlogPost) => 
        post.id === Number(id) ? blogPost : post
      );
    } else {
      updatedPosts = [...existingPosts, blogPost];
    }

    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    toast({
      title: id ? "Blog post updated!" : "Blog post saved!",
      description: id ? "Your blog post has been updated successfully." : "Your blog post has been saved successfully.",
    });

    navigate('/admin');
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>
      
      <div className="space-y-6">
        <div>
          <Label className="block text-sm font-medium mb-2">Title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="w-full"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Cover Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-2 max-h-48 object-cover rounded"
            />
          )}
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Meta Description (SEO)</Label>
          <Textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder="Enter meta description for SEO"
            className="w-full"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Custom URL</Label>
          <Input
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Enter custom URL (optional)"
            className="w-full"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Content</Label>
          <MDEditor
            value={content}
            onChange={(val) => setContent(val || '')}
            preview="edit"
            height={400}
          />
        </div>

        <Button onClick={handleSave} className="w-full">
          {id ? "Update Blog Post" : "Save Blog Post"}
        </Button>
      </div>
    </div>
  );
};