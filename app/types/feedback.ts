export interface FeedbackDetail {
  title: string;
  score: number;
  zones: {
    title: string;
    comment: string;
  }[];
  average: number;
}

export interface FeedbackData {
  overallScore: number;
  topic: string;
  overallFeedback: string;
  details: FeedbackDetail[];
  solution: string;
}
