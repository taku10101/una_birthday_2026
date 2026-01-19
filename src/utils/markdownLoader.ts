export async function loadMarkdown(contentOrPath: string): Promise<string> {
  // Check if it's a file path (ends with .md or .html)
  if (contentOrPath.endsWith('.md') || contentOrPath.endsWith('.html')) {
    try {
      const response = await fetch(contentOrPath)
      if (!response.ok) {
        throw new Error(`Failed to load file: ${contentOrPath}`)
      }
      return await response.text()
    } catch (error) {
      console.error('Error loading file:', error)
      return `Error loading file: ${contentOrPath}`
    }
  }

  // Otherwise, treat it as inline content
  return contentOrPath
}
