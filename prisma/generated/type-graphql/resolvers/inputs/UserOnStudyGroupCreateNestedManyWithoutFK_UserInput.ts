import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateManyFK_UserInputEnvelope } from "../inputs/UserOnStudyGroupCreateManyFK_UserInputEnvelope";
import { UserOnStudyGroupCreateOrConnectWithoutFK_UserInput } from "../inputs/UserOnStudyGroupCreateOrConnectWithoutFK_UserInput";
import { UserOnStudyGroupCreateWithoutFK_UserInput } from "../inputs/UserOnStudyGroupCreateWithoutFK_UserInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class UserOnStudyGroupCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: UserOnStudyGroupCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: UserOnStudyGroupCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: UserOnStudyGroupCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: UserOnStudyGroupWhereUniqueInput[] | undefined;
}
