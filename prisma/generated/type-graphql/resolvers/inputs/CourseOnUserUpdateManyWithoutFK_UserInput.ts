import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateManyFK_UserInputEnvelope } from "../inputs/CourseOnUserCreateManyFK_UserInputEnvelope";
import { CourseOnUserCreateOrConnectWithoutFK_UserInput } from "../inputs/CourseOnUserCreateOrConnectWithoutFK_UserInput";
import { CourseOnUserCreateWithoutFK_UserInput } from "../inputs/CourseOnUserCreateWithoutFK_UserInput";
import { CourseOnUserScalarWhereInput } from "../inputs/CourseOnUserScalarWhereInput";
import { CourseOnUserUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/CourseOnUserUpdateManyWithWhereWithoutFK_UserInput";
import { CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput";
import { CourseOnUserUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/CourseOnUserUpsertWithWhereUniqueWithoutFK_UserInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: CourseOnUserCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnUserCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: CourseOnUserUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnUserCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereUniqueInput], {
    nullable: true
  })
  set?: CourseOnUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CourseOnUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereUniqueInput], {
    nullable: true
  })
  delete?: CourseOnUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: CourseOnUserUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseOnUserScalarWhereInput[] | undefined;
}
