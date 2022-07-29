import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateWithoutFK_StudyGroupInput", {
  isAbstract: true
})
export class UserOnStudyGroupCreateWithoutFK_StudyGroupInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SendTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RejectedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemovedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CanceledTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput | undefined;
}
