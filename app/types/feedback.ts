export interface FeedbackDetail {
  title: string;
  score: number;
  comment: string;
}

export interface FeedbackData {
  overallScore: number;
  overallFeedback: string;
  details: FeedbackDetail[];
}
