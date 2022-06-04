import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateManyFK_CourseInputEnvelope } from "../inputs/CourseOnTermCreateManyFK_CourseInputEnvelope";
import { CourseOnTermCreateOrConnectWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_CourseInput";
import { CourseOnTermCreateWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateWithoutFK_CourseInput";
import { CourseOnTermScalarWhereInput } from "../inputs/CourseOnTermScalarWhereInput";
import { CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput } from "../inputs/CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput";
import { CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput } from "../inputs/CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput";
import { CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput } from "../inputs/CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermUpdateManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  upsert?: CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermCreateManyFK_CourseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  update?: CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput], {
    nullable: true
  })
  updateMany?: CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseOnTermScalarWhereInput[] | undefined;
}
