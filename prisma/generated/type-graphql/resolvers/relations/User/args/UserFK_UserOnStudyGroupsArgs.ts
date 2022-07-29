import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupOrderByWithRelationInput } from "../../../inputs/UserOnStudyGroupOrderByWithRelationInput";
import { UserOnStudyGroupWhereInput } from "../../../inputs/UserOnStudyGroupWhereInput";
import { UserOnStudyGroupWhereUniqueInput } from "../../../inputs/UserOnStudyGroupWhereUniqueInput";
import { UserOnStudyGroupScalarFieldEnum } from "../../../../enums/UserOnStudyGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserFK_UserOnStudyGroupsArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  where?: UserOnStudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserOnStudyGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserOnStudyGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UserOnStudyGroupID" | "SendTime" | "AcceptedTime" | "RejectedTime" | "RemovedTime" | "CanceledTime" | "FK_UserID" | "FK_StudyGroupID"> | undefined;
}
