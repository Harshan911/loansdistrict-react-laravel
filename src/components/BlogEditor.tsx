import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

export const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    // Create blog post object
    const blogPost = {
      id: Date.now(),
      title,
      date: new Date().toLocaleDateString(),
      image: image || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      content,
      excerpt: content.slice(0, 150) + '...'
    };

    // Save to localStorage
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    localStorage.setItem('blogPosts', JSON.stringify([...existingPosts, blogPost]));

    // Show success message
    toast({
      title: "Blog post saved!",
      description: "Your blog post has been saved successfully.",
    });

    // Reset form
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cover Image URL</label>
          <Input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <MDEditor
            value={content}
            onChange={(val) => setContent(val || '')}
            preview="edit"
            height={400}
          />
        </div>

        <Button onClick={handleSave} className="w-full">
          Save Blog Post
        </Button>
      </div>
    </div>
  );
};