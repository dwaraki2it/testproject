class UserMailer < ActionMailer::Base
  default from: "from@example.com"
  
  def mail_sent(user)
    @user = user
    mail(:to => user.email,:subject => I18n.t(:mail_subject))
  end
end
