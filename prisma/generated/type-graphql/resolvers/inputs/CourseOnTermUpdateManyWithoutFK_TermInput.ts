import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateManyFK_TermInputEnvelope } from "../inputs/CourseOnTermCreateManyFK_TermInputEnvelope";
import { CourseOnTermCreateOrConnectWithoutFK_TermInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_TermInput";
import { CourseOnTermCreateWithoutFK_TermInput } from "../inputs/CourseOnTermCreateWithoutFK_TermInput";
import { CourseOnTermScalarWhereInput } from "../inputs/CourseOnTermScalarWhereInput";
import { CourseOnTermUpdateManyWithWhereWithoutFK_TermInput } from "../inputs/CourseOnTermUpdateManyWithWhereWithoutFK_TermInput";
import { CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput } from "../inputs/CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput";
import { CourseOnTermUpsertWithWhereUniqueWithoutFK_TermInput } from "../inputs/CourseOnTermUpsertWithWhereUniqueWithoutFK_TermInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateManyWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermUpdateManyWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateWithoutFK_TermInput], {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermCreateOrConnectWithoutFK_TermInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermUpsertWithWhereUniqueWithoutFK_TermInput], {
    nullable: true
  })
  upsert?: CourseOnTermUpsertWithWhereUniqueWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateManyFK_TermInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermCreateManyFK_TermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereUniqueInput], {
    nullable: true
  })
  set?: CourseOnTermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CourseOnTermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereUniqueInput], {
    nullable: true
  })
  delete?: CourseOnTermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput], {
    nullable: true
  })
  update?: CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermUpdateManyWithWhereWithoutFK_TermInput], {
    nullable: true
  })
  updateMany?: CourseOnTermUpdateManyWithWhereWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseOnTermScalarWhereInput[] | undefined;
}
