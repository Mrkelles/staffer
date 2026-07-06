'use client';

import { type Editor } from '@tiptap/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Toggle } from '@/components/ui/toggle';
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading1, Heading2Icon, Heading3Icon, Italic, ListIcon, ListOrderedIcon, Redo, Strikethrough, Undo } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface iAppProps {
    editor: Editor | null;
}

export function Menubar({editor} : iAppProps) {

    if(!editor) {
        return null;
    }

    return (
        <div className='border border-input border-t-0 border-x-0 rounded-t-lg p-2 bg-card flex flex-wrap gap-2 items-center'>
            <TooltipProvider>
                <div className='flex flex-wrap gap-1'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("bold")}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleBold().run()
                            } className={cn(
                                editor.isActive("bold") && "text-muted-foreground bg-muted"
                            )}
                            >
                                <Bold />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Bold</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("italic")}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleItalic().run()
                            } className={cn(
                                editor.isActive("italic") && "text-muted-foreground bg-muted"
                            )}
                            >
                                <Italic />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Italic</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("strike")}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleStrike().run()
                            } className={cn(
                                editor.isActive("strike") && "text-muted-foreground bg-muted"
                            )}
                            >
                                <Strikethrough />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Strike</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", {level:1})}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleHeading({level:1}).run()
                            } className={cn(
                                editor.isActive("heading", {level:1}) && "text-muted-foreground bg-white"
                            )}
                            >
                                <Heading1 />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 1</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", {level:2})}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleHeading({level:2}).run()
                            } className={cn(
                                editor.isActive("heading", {level:2}) && "text-muted-foreground bg-white"
                            )}
                            >
                                <Heading2Icon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 2</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", {level:3})}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleHeading({level:3}).run()
                            } className={cn(
                                editor.isActive("heading", {level:3}) && "text-muted-foreground bg-muted"
                            )}
                            >
                                <Heading3Icon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 3</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("bulletList")}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleBulletList().run()
                            } className={cn(
                                editor.isActive("bulletList") && "text-muted-foreground bg-muted"
                            )}
                            >
                                <ListIcon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Bullet List</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("orderedList")}
                                onPressedChange={()=> 
                                editor.chain().focus().toggleOrderedList().run()
                            } className={cn(
                                editor.isActive("orderedList") && "text-muted-foreground bg-muted"
                            )}
                            >
                                <ListOrderedIcon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Numbered List</TooltipContent>
                    </Tooltip>
                </div>

                <div className='w-px h-6 bg-border mx-2'></div>

                <div className='flex flex-wrap gap-1'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive({textAlign: 'left'})}
                                onPressedChange={()=> 
                                editor.chain().focus().setTextAlign('left').run()
                            } className={cn(
                                editor.isActive({textAlign: 'left'}) && "text-muted-foreground bg-muted"
                            )}
                            >
                                <AlignLeft />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Align Left</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive({textAlign: 'center'})}
                                onPressedChange={()=> 
                                editor.chain().focus().setTextAlign('center').run()
                            } className={cn(
                                editor.isActive({textAlign: 'center'}) && "text-muted-foreground bg-muted"
                            )}
                            >
                                <AlignCenter />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Align Center</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive({textAlign: 'right'})}
                                onPressedChange={()=> 
                                editor.chain().focus().setTextAlign('right').run()
                            } className={cn(
                                editor.isActive({textAlign: 'right'}) && "text-muted-foreground bg-muted"
                            )}
                            >
                                <AlignRight />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Align Right</TooltipContent>
                    </Tooltip>
                </div>

                <div className='w-px h-6 bg-border mx-2'></div>

                <div className='flex flex-wrap gap-1'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="sm" variant="ghost" type='button'
                            onClick={()=> editor.chain().focus().undo().run()}
                            disabled={!editor.can().undo()}>
                                <Undo />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Undo</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="sm" variant="ghost" type='button'
                            onClick={()=> editor.chain().focus().redo().run()}
                            disabled={!editor.can().redo()}>
                                <Redo />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Redo</TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>
    )
} 