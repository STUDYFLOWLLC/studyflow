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
  SendDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemoveDate?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput | undefined;
}
