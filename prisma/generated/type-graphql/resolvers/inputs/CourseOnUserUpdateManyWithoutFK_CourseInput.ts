import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateManyFK_CourseInputEnvelope } from "../inputs/CourseOnUserCreateManyFK_CourseInputEnvelope";
import { CourseOnUserCreateOrConnectWithoutFK_CourseInput } from "../inputs/CourseOnUserCreateOrConnectWithoutFK_CourseInput";
import { CourseOnUserCreateWithoutFK_CourseInput } from "../inputs/CourseOnUserCreateWithoutFK_CourseInput";
import { CourseOnUserScalarWhereInput } from "../inputs/CourseOnUserScalarWhereInput";
import { CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput } from "../inputs/CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput";
import { CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput } from "../inputs/CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput";
import { CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput } from "../inputs/CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserUpdateManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserUpdateManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: CourseOnUserCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnUserCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  upsert?: CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnUserCreateManyFK_CourseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  update?: CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput], {
    nullable: true
  })
  updateMany?: CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseOnUserScalarWhereInput[] | undefined;
}
