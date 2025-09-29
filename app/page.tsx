"use client"

import React, { FC, useState, useEffect } from "react"
import { rawTextList } from "../lib/text.constant"
import { generateShinjiroComment } from "../lib/generator"

interface Comment {
  id: number
  text: string
  top: string
}

const Page: FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [comments, setComments] = useState<Comment[]>([])
  const [generatedComments, setGeneratedComments] = useState<Comment[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [commentIndex, setCommentIndex] = useState<number>(0)
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  useEffect(() => {
    if (commentIndex < 20) {
      const timer = setTimeout(() => {
        const newComment: Comment = {
          id: Date.now() + Math.random(),
          text: rawTextList[commentIndex % rawTextList.length],
          top: `calc(40vh * ${Math.random()})`,
        }
        setComments((prev) => [...prev, newComment])
        setCommentIndex((prev) => prev + 1)
        setTimeout(() => {}, 8000)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (commentIndex >= 20) {
      setCommentIndex(0)
    }
  }, [commentIndex])

  useEffect(() => {
    if (isGenerating && currentIndex < 20) {
      const timer = setTimeout(() => {
        const commentText = inputText
          ? generateShinjiroComment(inputText)
          : rawTextList[currentIndex % rawTextList.length]

        const newComment: Comment = {
          id: Date.now() + Math.random(),
          text: commentText,
          top: `calc(50vh * ${Math.random()} + 40vh)`,
        }
        setGeneratedComments((prev) => [...prev, newComment])
        setCurrentIndex((prev) => prev + 1)

        setTimeout(() => {
          setGeneratedComments((prev) =>
            prev.filter((comment) => comment.id !== newComment.id)
          )
        }, 8000)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (isGenerating && currentIndex >= 20) {
      setIsGenerating(false)
      setCurrentIndex(0)
    }
  }, [currentIndex, isGenerating, inputText])

  const startGeneration = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setCurrentIndex(0)
    setGeneratedComments([])
  }

  return (
    <React.Fragment>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1 style={{ color: "#f0f0f0" }}>進次郎例文ジェネレーター</h1>
          <div style={{ display: "flex", flexFlow: "row", gap: "1rem" }}>
            <form
              onSubmit={startGeneration}
              style={{ display: "flex", flexFlow: "row", gap: "1rem" }}
            >
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="キーワードを入力"
                style={{
                  backgroundColor: "#666",
                  border: "none",
                  borderRadius: ".25rem",
                  color: "#f0f0f0",
                  fontSize: "1.5rem",
                  padding: ".5rem",
                }}
              />
              <button
                type="submit"
                disabled={isGenerating}
                style={{
                  background: isGenerating ? "#444" : "#666",
                  border: "none",
                  borderRadius: ".25rem",
                  color: "#f0f0f0",
                  fontSize: "1.5rem",
                  padding: ".5rem 1rem",
                  cursor: isGenerating ? "not-allowed" : "pointer",
                }}
              >
                {isGenerating ? "生成中..." : "生成"}
              </button>
            </form>
          </div>
        </div>

        {generatedComments.map((comment) => (
          <div
            key={comment.id}
            style={{
              position: "absolute",
              top: comment.top,
              left: "100%",
              color: "#f0f0f0",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
              zIndex: 100,
              animation: "slide 8s linear forwards",
            }}
          >
            {comment.text}
          </div>
        ))}

        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              position: "absolute",
              top: comment.top,
              left: "100%",
              color: "#f0f0f0",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
              zIndex: 100,
              animation: "slide 8s linear forwards",
            }}
          >
            {comment.text}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Page
