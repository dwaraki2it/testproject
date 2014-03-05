class HomeController < ApplicationController
  def new
    @mail = Mailing.new
  end
  
  def create
    @mail = Mailing.new(params[:mailing])
    if @mail.save_with_captcha
      UserMailer.mail_sent(@mail).deliver
      redirect_to root_path
    else
      render :action => :new
    end
  end
end
