export interface FeedbackDetail {
  title: string;
  score: number;
  comment: string;
}

export interface FeedbackData {
  overallScore: number;
  topic: string;
  overallFeedback: string;
  details: FeedbackDetail[];
  solution: string;
}
