import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateManyFK_UserInputEnvelope } from "../inputs/StudyGroupCreateManyFK_UserInputEnvelope";
import { StudyGroupCreateOrConnectWithoutFK_UserInput } from "../inputs/StudyGroupCreateOrConnectWithoutFK_UserInput";
import { StudyGroupCreateWithoutFK_UserInput } from "../inputs/StudyGroupCreateWithoutFK_UserInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class StudyGroupCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [StudyGroupCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: StudyGroupCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: StudyGroupCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: StudyGroupCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: StudyGroupWhereUniqueInput[] | undefined;
}
