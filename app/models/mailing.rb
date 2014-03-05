class Mailing < ActiveRecord::Base
   attr_accessible :name,:email,:captcha, :captcha_key
   validates :name,:presence => {:message => I18n.t(:name_error)}
   validates :email, :email_format => {:message => I18n.t(:email_error)}
   apply_simple_captcha
end
