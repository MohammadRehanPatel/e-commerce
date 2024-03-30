package com.ecommerce.service;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import org.springframework.stereotype.Service;

public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJWt(String jwt)throws UserException;

}
