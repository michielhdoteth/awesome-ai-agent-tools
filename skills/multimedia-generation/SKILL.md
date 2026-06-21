# Multimedia Generation

Generate video, voice, 3D models, and music using MCP servers and AI services. This skill covers the multimedia generation ecosystem as of 2026.

## When to Use

- Creating video content from text or image prompts
- Generating voiceovers, cloning voices, or transcribing audio
- Building 3D models from text or images
- Composing music or sound effects
- Integrating multimedia generation into agent workflows

## Video Generation

### MCP Servers

| Server | Models Supported | Key Feature |
|--------|-----------------|-------------|
| **Arcframe MCP** | Veo 3.1, Kling 2.5, Sora 2, Runway Gen-4 | Single server, OAuth 2.1, async jobs |
| **Pixazo MCP** | 48+ video models | Gateway pattern, most comprehensive |

### Arcframe MCP Setup

```bash
# Install
npx arcframe-mcp@latest

# Configure in opencode.json
{
  "mcpServers": {
    "arcframe": {
      "command": "npx",
      "args": ["arcframe-mcp@latest"],
      "env": {
        "ARCFRAME_API_KEY": "your-key"
      }
    }
  }
}
```

### Video Generation Workflow

1. **Plan**: What story/visual do you need?
2. **Script**: Write narration or shot list
3. **Generate**: Use MCP to create video clips
4. **Edit**: Combine clips, add transitions
5. **Export**: Render final output

### Model Selection Guide

| Use Case | Recommended Model | Why |
|----------|------------------|-----|
| Cinematic footage | Veo 3.1 | Best quality, Google training data |
| Fast iteration | Kling 2.5 | Good quality, fast generation |
| Creative/artistic | Sora 2 | Unique style, OpenAI approach |
| Budget | Runway Gen-4 | Cost-effective, decent quality |

## Voice & Audio

### MCP Servers

| Server | Provider | Key Feature |
|--------|----------|-------------|
| **ElevenLabs MCP** | ElevenLabs | Official, TTS + cloning + transcription |
| **Fish Audio MCP** | Fish Audio | Best Chinese voice, ~$0.01/request |
| **mcp-voice-clone** | Multi-provider | Dual provider (Fish + ElevenLabs) |

### Voice Generation Patterns

**Text-to-Speech:**
```
Input: "Hello, welcome to our product demo"
Output: Natural-sounding voice audio
Use: Narration, accessibility, localization
```

**Voice Cloning:**
```
Input: 30 seconds of sample audio + text to speak
Output: Audio in the cloned voice
Use: Personalized content, brand voice consistency
```

**Transcription:**
```
Input: Audio file
Output: Text transcript with timestamps
Use: Meeting notes, content repurposing, search
```

### ElevenLabs MCP Setup

```bash
# Install
npx @elevenlabs/mcp-server@latest

# Tools available:
# - text_to_speech: Convert text to natural speech
# - voice_cloning: Clone a voice from samples
# - transcription: Transcribe audio to text
# - voice_agents: Create interactive voice agents
```

## 3D Model Generation

### MCP Servers

| Server | Key Feature |
|--------|-------------|
| **mcp-blender** (RFingAdam) | 218 tools, multi-backend AI 3D generation |
| **Tripo MCP** | Official, text/image-to-3D, rigging, animation |

### 3D Generation Workflow

1. **Concept**: Text description or reference image
2. **Generate**: Create base 3D model
3. **Refine**: Adjust geometry, materials, textures
4. **Rig**: Add skeleton for animation (if needed)
5. **Export**: GLB, FBX, OBJ formats

### Model Selection

| Use Case | Recommended | Why |
|----------|-------------|-----|
| Quick concept | Tripo MCP | Fast, text-to-3D |
| Detailed modeling | Blender MCP | Full control, 218 tools |
| Game assets | Tripo + Blender | Generate base, refine in Blender |

## Music Generation

### Services

| Service | Version | Key Feature |
|---------|---------|-------------|
| **Suno** | v5.5 | Voice cloning, 8-min songs, consumer |
| **Google Lyria** | 3 Pro | Enterprise-safe, licensed training data |
| **MiniMax Music** | 2.5 | Professional production, full API |

### Music Generation Patterns

**Background Music:**
```
Input: "Upbeat corporate tech music, 120 BPM, 2 minutes"
Output: Royalty-free background track
Use: Videos, presentations, apps
```

**Sound Effects:**
```
Input: "Door creaking open in old house"
Output: Realistic sound effect
Use: Games, videos, podcasts
```

### Important Notes

- Suno has no official API (all implementations are reverse-engineered)
- For commercial use, prefer Lyria 3 Pro (licensed training data)
- MiniMax Music 2.5 has the most complete API

## Integration Patterns

### Agent Workflow

```
User: "Create a product demo video"
  |
  v
Agent (orchestrator)
  |-- Script Agent: Write narration script
  |-- Voice Agent: Generate voiceover (ElevenLabs)
  |-- Video Agent: Generate visual clips (Arcframe)
  |-- Music Agent: Generate background music (Suno/Lyria)
  |-- Edit Agent: Combine all assets
  |
  v
Output: Complete product demo video
```

### MCP App Pattern (2026)

Some multimedia MCPs now support MCP Apps - returning interactive HTML inside Claude/ChatGPT:

```json
{
  "tool": "generate_video",
  "result": {
    "type": "html",
    "content": "<video-player src='...' controls />"
  }
}
```

## Cost Considerations

| Service | Approximate Cost |
|---------|-----------------|
| Veo 3.1 | $0.10-0.50 per second |
| Kling 2.5 | $0.05-0.20 per second |
| ElevenLabs TTS | $0.01-0.03 per character |
| ElevenLabs Cloning | $5-20 per voice clone |
| Suno | $8-24/month subscription |
| Tripo 3D | $0.10-0.50 per model |

## Quality Checklist

Before shipping generated content:

- [ ] **Video**: Resolution, frame rate, aspect ratio correct
- [ ] **Audio**: Sample rate, loudness normalized, no artifacts
- [ ] **3D**: Polygon count appropriate, textures sharp, no z-fighting
- [ ] **Music**: Key/tempo consistent, no copyright issues
- [ ] **All**: Brand guidelines followed, accessible (captions, alt text)

## References

- Arcframe MCP: https://github.com/arcframe/mcp
- Pixazo MCP: https://github.com/pixazo/mcp
- ElevenLabs MCP: https://github.com/elevenlabs/mcp-server
- Blender MCP: https://github.com/RFingAdam/mcp-blender
- Tripo MCP: https://github.com/VAST-AI-Research/TripoSR
- Suno: https://suno.com
- Google Lyria: https://deepmind.google/technologies/lyria/
