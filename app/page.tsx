"use client"

import React, { FC, useState, useEffect } from "react"
import { rawTextList } from "../lib/text.constant"

interface Comment {
  id: number
  text: string
  top: string
}

const Page: FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [comments, setComments] = useState<Comment[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (currentIndex < rawTextList.length) {
      const timer = setTimeout(() => {
        const newComment: Comment = {
          id: Date.now() + Math.random(),
          text: rawTextList[currentIndex],
          top: `calc(30vh * ${Math.random()})`,
        }
        setComments((prev) => [...prev, newComment])
        setCurrentIndex((prev) => prev + 1)

        setTimeout(() => {
          setComments((prev) =>
            prev.filter((comment) => comment.id !== newComment.id)
          )
        }, 8000)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (currentIndex >= rawTextList.length) {
      setCurrentIndex(0)
    }
  }, [currentIndex])

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
            <form style={{ display: "flex", flexFlow: "row", gap: "1rem" }}>
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
                type="button"
                style={{
                  background: "#666",
                  border: "none",
                  borderRadius: ".25rem",
                  color: "#f0f0f0",
                  fontSize: "1.5rem",
                  padding: ".5rem 1rem",
                  cursor: "pointer",
                }}
              >
                生成
              </button>
            </form>
          </div>
        </div>

        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`comment-${comment.id}`}
            style={{
              position: "absolute",
              top: comment.top,
              right: "-100%",
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
