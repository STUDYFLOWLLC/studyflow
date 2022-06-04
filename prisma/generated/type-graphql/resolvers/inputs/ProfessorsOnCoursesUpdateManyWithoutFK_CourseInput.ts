import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope } from "../inputs/ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope";
import { ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput";
import { ProfessorsOnCoursesCreateWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_CourseInput";
import { ProfessorsOnCoursesScalarWhereInput } from "../inputs/ProfessorsOnCoursesScalarWhereInput";
import { ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_CourseInput";
import { ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_CourseInput";
import { ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_CourseInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: ProfessorsOnCoursesCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  upsert?: ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  set?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  delete?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  update?: ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_CourseInput], {
    nullable: true
  })
  updateMany?: ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProfessorsOnCoursesScalarWhereInput[] | undefined;
}
