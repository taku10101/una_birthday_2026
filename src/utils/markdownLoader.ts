export async function loadMarkdown(contentOrPath: string): Promise<string> {
  // Check if it's a file path (ends with .md)
  if (contentOrPath.endsWith('.md')) {
    try {
      const response = await fetch(contentOrPath)
      if (!response.ok) {
        throw new Error(`Failed to load markdown file: ${contentOrPath}`)
      }
      return await response.text()
    } catch (error) {
      console.error('Error loading markdown file:', error)
      return `Error loading markdown file: ${contentOrPath}`
    }
  }

  // Otherwise, treat it as inline markdown content
  return contentOrPath
}
