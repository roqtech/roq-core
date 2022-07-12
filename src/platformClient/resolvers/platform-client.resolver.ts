import { gql } from '@apollo/client/core'
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql'
import { plainToClass } from 'class-transformer'
import { BulkDeleteFilterArgType } from 'src/library/argTypes'
import { ParseUUIDStringPipe } from 'src/library/pipes'
import { FileUpdateDto, NotificationTypeUserPreferenceUpsertDto, UserInvitesCreateDto } from 'src/platformClient/dtos'
import { CreateUserInvitesModel, UserPlatformInviteModel, UserFileModel } from 'src/platformClient/models'
import {
  NotificationTypeCategoryModel,
  NotificationTypeCategoryPageModel,
  NotificationTypeUserPreferenceModel,
  NotificationWebModel,
} from 'src/platformClient/platformNotificationClient/models'
import { FileStatusEnum } from 'src/platformClient/platformSpaceClient/enums'
import { PlatformClientService, PlatformHttpClientService } from 'src/platformClient/services'

import { NotificationTypeCategoryArgType } from '../dtos/notification-type-category.arg.type'

@Resolver()
export class PlatformClientResolver {
  constructor(
    private readonly platformHttpClientService: PlatformHttpClientService,
    private readonly platformClientService: PlatformClientService,
  ) {}

  // @Query(() => String)
  // async mailHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           mailHealthCheck
  //         }
  //       `,
  //     },
  //     'mailHealthCheck',
  //   )
  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async searchHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           searchHealthCheck
  //         }
  //       `,
  //     },
  //     'searchHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async spaceHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           spaceHealthCheck
  //         }
  //       `,
  //     },
  //     'spaceHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async notificationHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           notificationHealthCheck
  //         }
  //       `,
  //     },
  //     'notificationHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async workflowHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           workflowHealthCheck
  //         }
  //       `,
  //     },
  //     'workflowHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async userHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           userHealthCheck
  //         }
  //       `,
  //     },
  //     'userHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async dataHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           dataHealthCheck
  //         }
  //       `,
  //     },
  //     'dataHealthCheck',
  //   )
  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async contentHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           contentHealthCheck
  //         }
  //       `,
  //     },
  //     'contentHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Query(() => String)
  // async chatHealthCheck(): Promise<string> {
  //   const response = await this.platformClientService.request(
  //     {
  //       query: gql`
  //         {
  //           chatHealthCheck
  //         }
  //       `,
  //     },
  //     'chatHealthCheck',
  //   )

  //   return JSON.stringify(response)
  // }

  // @Mutation(() => [String])
  // async deleteFiles(@Args({ type: () => BulkDeleteFilterArgType }) args: BulkDeleteFilterArgType): Promise<string[]> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation DeleteFiles($filter: DeleteFilterArgType) {
  //         deleteFiles(filter: $filter)
  //       }
  //     `,
  //     variables: {
  //       filter: args.filter,
  //     },
  //   })

  //   return data?.deleteFiles
  // }

  // @Mutation(() => CreateUserInvitesModel, { nullable: true })
  // async sendUserInvites(
  //   @Args({ name: 'userInvites', type: () => UserInvitesCreateDto })
  //   userInvites: UserInvitesCreateDto,
  // ): Promise<CreateUserInvitesModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation CreateUserInvites($userInvites: UserInvitesCreateDto!) {
  //         sendUserInvites(userInvites: $userInvites) {
  //           success {
  //             email
  //           }
  //           errors {
  //             error
  //             email
  //           }
  //         }
  //       }
  //     `,
  //     variables: {
  //       userInvites,
  //     },
  //   })

  //   return data?.sendUserInvites
  // }

  // @Mutation(() => UserPlatformInviteModel, { nullable: true })
  // async resendUserInvite(
  //   @Args({ name: 'id', type: () => ID }, ParseUUIDStringPipe) id: string,
  // ): Promise<UserPlatformInviteModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation ResendUserInvite($id: ID!) {
  //         resendUserInvite(id: $id) {
  //           id
  //           status
  //           userToken {
  //             id
  //             validTill
  //             userId
  //             user {
  //               id
  //               email
  //             }
  //           }
  //           createdByUserId
  //           createdBy {
  //             id
  //             email
  //           }
  //           userTokenId
  //         }
  //       }
  //     `,
  //     variables: {
  //       id,
  //     },
  //   })

  //   return data.resendUserInvite
  // }

  // @Mutation(() => UserPlatformInviteModel, { nullable: true })
  // async cancelUserInvite(
  //   @Args({ name: 'id', type: () => ID }, ParseUUIDStringPipe) id: string,
  // ): Promise<UserPlatformInviteModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation CancelUserInvite($id: ID!) {
  //         cancelUserInvite(id: $id) {
  //           id
  //           status
  //           statusUpdatedAt
  //         }
  //       }
  //     `,
  //     variables: {
  //       id,
  //     },
  //   })

  //   return data?.cancelUserInvite
  // }

  // @Mutation(() => UserFileModel, { nullable: true })
  // async updateFile(
  //   @Args({ name: 'fileId', type: () => ID }, ParseUUIDStringPipe) fileId: string,
  //   @Args({ name: 'updateFileDto', type: () => FileUpdateDto })
  //   updateFileDto: FileUpdateDto,
  // ): Promise<UserFileModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation updateFile($fileId: ID!, $updateFileDto: FileUpdateDto!) {
  //         updateFile(fileId: $fileId, updateFileDto: $updateFileDto) {
  //           id
  //           name
  //         }
  //       }
  //     `,
  //     variables: {
  //       fileId,
  //       updateFileDto,
  //     },
  //   })
  //   return data?.updateFile
  // }

  // @Mutation(() => UserFileModel, { nullable: true })
  // async makeFilePublic(
  //   @Args({ name: 'fileId', type: () => ID }, ParseUUIDStringPipe) id: string,
  // ): Promise<UserFileModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation makeFilePublic($id: ID!) {
  //         makeFilePublic(fileId: $id) {
  //           id
  //           url
  //           isPublic
  //         }
  //       }
  //     `,
  //     variables: {
  //       id,
  //     },
  //   })

  //   return data?.makeFilePublic
  // }

  // @Mutation(() => UserFileModel, { nullable: true })
  // async updateFileStatus(
  //   @Args({ name: 'fileId', type: () => ID }, ParseUUIDStringPipe) fileId: string,
  //   @Args({ name: 'status', type: () => FileStatusEnum }) status: FileStatusEnum,
  // ): Promise<UserFileModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation UpdateFileStatusMutation($fileId: ID!, $status: FileStatusEnum!) {
  //         updateFileStatus(fileId: $fileId, status: $status) {
  //           id
  //           status
  //           url
  //         }
  //       }
  //     `,
  //     variables: {
  //       fileId,
  //       status,
  //     },
  //   })

  //   return data.updateFileStatus
  // }

  // @Mutation(() => Boolean)
  // async markAllAsReadNotification(): Promise<boolean> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation MarkAllAsReadNotification {
  //         markAllAsReadNotification
  //       }
  //     `,
  //   })

  //   return data?.markAllAsReadNotification
  // }

  // @Mutation(() => NotificationWebModel, { nullable: true })
  // async markAsUnreadNotification(
  //   @Args({ name: 'id', type: () => ID }, ParseUUIDStringPipe) id: string,
  // ): Promise<NotificationWebModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation markAsUnreadNotification($id: ID!) {
  //         markAsUnreadNotification(id: $id) {
  //           id
  //           read
  //         }
  //       }
  //     `,
  //     variables: {
  //       id,
  //     },
  //   })

  //   return data?.markAsUnreadNotification
  // }

  // @Mutation(() => NotificationWebModel, { nullable: true })
  // async markAsReadNotification(
  //   @Args({ name: 'id', type: () => ID }, ParseUUIDStringPipe) id: string,
  // ): Promise<NotificationWebModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation markAsReadNotification($id: ID!) {
  //         markAsReadNotification(id: $id) {
  //           id
  //           read
  //         }
  //       }
  //     `,
  //     variables: {
  //       id,
  //     },
  //   })

  //   return data?.markAsReadNotification
  // }

  // @Mutation(() => NotificationTypeUserPreferenceModel, { nullable: true })
  // async upsertNotificationTypeUserPreference(
  //   @Args({
  //     name: 'notificationTypeUserPreference',
  //     type: () => NotificationTypeUserPreferenceUpsertDto,
  //   })
  //   notificationTypeUserPreferenceData: NotificationTypeUserPreferenceUpsertDto,
  // ): Promise<NotificationTypeUserPreferenceModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     mutation: gql`
  //       mutation UpsertNotificationTypeUserPreference(
  //         $web: Boolean!
  //         $mail: Boolean!
  //         $notificationTypeId: ID!
  //         $id: ID
  //       ) {
  //         upsertNotificationTypeUserPreference(
  //           notificationTypeUserPreference: { id: $id, web: $web, mail: $mail, notificationTypeId: $notificationTypeId }
  //         ) {
  //           id
  //           web
  //           mail
  //           key
  //           userId
  //           notificationTypeId
  //         }
  //       }
  //     `,
  //     variables: {
  //       ...notificationTypeUserPreferenceData,
  //     },
  //   })

  //   return data?.upsertNotificationTypeUserPreference
  // }

  // @Query(() => NotificationTypeCategoryPageModel)
  // async notificationTypeCategories(
  //   @Args({ type: () => NotificationTypeCategoryArgType })
  //   args: NotificationTypeCategoryArgType,
  // ): Promise<NotificationTypeCategoryPageModel> {
  //   const { data: data } = await this.platformClientService.request({
  //     query: gql`
  //       query notificationTypeCategories {
  //         notificationTypeCategories {
  //           data {
  //             id
  //             key
  //             description
  //             notificationTypes {
  //               data {
  //                 id
  //                 key
  //                 description
  //                 defaultUserActiveWeb
  //                 defaultUserActiveMail
  //                 notificationTypeUserPreferences {
  //                   data {
  //                     id
  //                     key
  //                     web
  //                     mail
  //                     userId
  //                     notificationTypeId
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `,
  //     variables: {
  //       args,
  //     },
  //   })

  //   return {
  //     totalCount: data.totalCount,
  //     data: data.notificationTypeCategories.data.map((notificationTypeCategoryEntity) =>
  //       plainToClass(NotificationTypeCategoryModel, notificationTypeCategoryEntity),
  //     ),
  //   }
  // }
}
